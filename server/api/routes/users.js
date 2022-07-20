import express from 'express'
import { getUsers,updatedUser,deleteUser,getUser } from '../controllers/user.js'
import { verifyAdmin,  verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// UPDATE
router.put('/:id',verifyAdmin,updatedUser)
// DELETE
router.delete('/:id',verifyAdmin,deleteUser)
// GET
router.get('/:id',verifyUser,getUser)
// GET ALL
router.get('/',verifyAdmin,getUsers)

export default router