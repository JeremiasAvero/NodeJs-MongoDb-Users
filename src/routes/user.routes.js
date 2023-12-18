const express = require('express')
const {createUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/user.controller')
const router = express.Router();
/**
 * @swagger
 * components: 
 *  schemas:
 *    User:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the user name
 *        age: 
 *          type: integer
 *          description: the user age
 *        email:  
 *          type: string
 *          description: the user email
 *      required:
 *         - name
 *         - age
 *         - email
 *      example:
 *         name: Thomas Eriksen
 *         age: 30
 *         email: thomaserik78@gmail.com
 */


  
router.get('/users', getUsers)
/**
 * @swagger
 * /api/users:
 *  get: 
 *    summary: return all users
 *    tags: [User]
 *    responses:
 *       200: 
 *          description: all users
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: array
 *                  items: 
 *                      $ref: '#/components/schemas/User'     
 */
router.get('/users/:id', getUser)
/**
 * @swagger
 * /api/users/{id}:
 *  get: 
 *    summary: return a user
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the user id       
 *    responses:
 *       200: 
 *          description: a user
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/components/schemas/User'   
 *       404:
 *          description:  user not found
 */       
router.post('/users', createUser)
/**
 * @swagger
 * /api/users:
 *  post: 
 *    summary: create new user
 *    tags: [User]
 *    requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *    responses:
 *       200: 
 *          description: new user created
 */

router.delete('/users/:id', deleteUser)
/**
 * @swagger
 * /api/users/{id}:
 *  delete: 
 *    summary: delete a user
 *    tags: [User]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the user id       
 *    responses:
 *       200: 
 *          description: user deleted
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/components/schemas/User'   
 *       404:
 *          description:  user not found
 */  


router.put('/users/:id', updateUser)

/**
 * @swagger
 * /api/users/{id}:
 *  put: 
 *    summary: update a user
 *    tags: [User]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the user id   
 *    requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'    
 *    responses:
 *       200: 
 *          description: user updated
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/components/schemas/User'   
 *       404:
 *          description:  user not found
 */  

module.exports = router