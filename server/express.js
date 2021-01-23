import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import postRoutes from './routes/post.routes'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
import { StaticRouter } from 'react-router-dom'

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from './../client/theme'

import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

if (process.env.NODE_ENV === 'development') devBundle.compile(app)

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) // ??
app.use(cookieParser())
app.use(compress()) // ??

app.use(helmet()) // ??

app.use(cors()) // ??

// Тут имеется ввиду, что он будет использовать файлы из папки dist
// для рендеринга на серверной стороне ??
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', postRoutes)

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets() // Обработка рендера на стороне сервера
  const context = {}
  const markup = ReactDOMServer.renderToString(
    // Рендеринг react элементов на стороне сервера и передача в виде строки
    sheets.collect(
      // Собирает таблицы стилей во вроемя рендеринга
      // Статический роутер на стороне сервера
      // ThemeProvider - провайдер заданных theme стилей для react компонентов
      // на стороне клиента
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </StaticRouter>
    )
  ) // зачем здесь проверка на содержание context.url ??
  if (context.url) {
    return res.redirect(303, context.url)
  }
  const css = sheets.toString()
  res.status(200).send( 
    Template({
      markup: markup,
      css: css,
    })
  )
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ': ' + err.message })
  } else if (err) {
    res.status(400).json({ error: err.name + ': ' + err.message })
    console.log(err)
  }
})

export default app
