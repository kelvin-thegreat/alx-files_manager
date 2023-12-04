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
route.get('/status', ((request, response) => AppController.getStatus(request, response)));
route.get('/stats', ((request, response) => AppController.getStats(request, response)));
route.post('/users', ((request, response) => UsersController.postNew(request, response)));
route.post('/files', ((request, response) => FileController.postUpload(request, response)));
route.get('/files/:id', ((request, response) => FileController.getShow(request, response)));
route.get('/files', ((request, response) => FileController.getIndex(request, response)));
route.put('/files/:id/publish', ((request, response) => FileController.putPublish(request, response)));
route.put('/files/:id/publish', ((request, response) => FileController.putUnpublish(request, response)));
route.get('/files/:id/data', ((request, response) => FileController.getFile(request, response)));
route.get('/connect', ((request, response) => AuthController.getConnect(request, response)));
route.get('/disconnect', ((request, response) => AuthController.getDisconnect(request, response)));
route.get('/users/me', ((request, response) => UsersController.getMe(request, response)));
export default route;
