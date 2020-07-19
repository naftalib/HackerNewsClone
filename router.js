import Stories from './PAGES/stories.js';

const router = new Navigo(null, true, '#');

export default class RouterHandler {
  constructor() {
    this.createRoutes()  
  }  
  
  createRoutes() {
    const allRoutes = [
      { path: '/new', page: Stories },
      { path: '/newest', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories },
      { path: '/jobs', page: Stories }   
    ];
    
     allRoutes.forEach(({ path, page }) => {
      router.on(path, () => {
         page(path); 
      }).resolve();
    })
  }
}