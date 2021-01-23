import {Router} from 'express'
import userCtrl from '../controllers/user.controller'

const router = Router()

router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create)

router.route('/api/users/:userId')
    .get(userCtrl.read)
    .put(userCtrl.update)
    .delete(userCtrl.remove)

router.route('/api/users/photo/:userId')
    .get(userCtrl.photo, userCtrl.defaultPhoto)

router.route('/api/users/defaultphoto')
    .get(userCtrl.defaultPhoto)

router.param('userId', userCtrl.userByID)

export default router
