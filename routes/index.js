import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FileController from '../controllers/FilesController';

/**
 * Injects routes with their handlers to the given Express application.
 * @param {Express} api
 */
const route = express.Router();

router.get('/status', ((request, response) => 
  AppController.getStatus(request, response)));
router.get('/stats', ((request, response) => 
  AppController.getStats(request, response)));
router.post('/users', ((request, response) => 
  UsersController.postNew(request, response)));
router.post('/files', ((request, response) => 
  FileController.postUpload(request, response)));
router.get('/files/:id', ((request, response) => 
  FileController.getShow(request, response)));
router.get('/files', ((request, response) => 
  FileController.getIndex(request, response)));
router.put('/files/:id/publish', ((request, response) => 
  FileController.putPublish(request, response)));
router.put('/files/:id/publish', ((request, response) => 
  FileController.putUnpublish(request, response)));
router.get('/files/:id/data', ((request, response) => 
  FileController.getFile(request, response)));
router.get('/connect', ((request, response) => 
  AuthController.getConnect(request, response)));
router.get('/disconnect', ((request, response) => 
  AuthController.getDisconnect(request, response)));
router.get('/users/me', ((request, response) => 
  UsersController.getMe(request, response)));

export default route;
