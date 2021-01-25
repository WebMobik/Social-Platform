import { Router } from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = Router()

router.route('/api/users').get(userCtrl.list).post(userCtrl.create)

router
  .route('/api/users/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove)

router
  .route('/api/users/photo/:userId')
  .get(userCtrl.photo, userCtrl.defaultPhoto)

router.route('/api/users/defaultphoto').get(userCtrl.defaultPhoto)

router.param('userId', userCtrl.userByID)

router
  .route('/api/users/follow')
  .put(authCtrl.requireSignin, userCtrl.addFollowing, userCtrl.addFollower)

router
  .route('/api/users/unfollow')
  .put(
    authCtrl.requireSignin,
    userCtrl.removeFollowing,
    userCtrl.removeFollower
  )

router
  .route('/api/users/findpeople/:userId')
  .get(authCtrl.requireSignin, userCtrl.findPeople)

export default router
