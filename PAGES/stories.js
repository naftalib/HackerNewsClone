import view from '../UTILS/view.js'
import Story from '../components/Story.js'

export default async function Stories(path) {
 		 const stories = await getStories(path)
 		 const hasStories = stories.length > 0;

 	view.innerHTML = `<div>
    ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join('') : 'No stories'}
  </div>`;  
}

async function getStories(path){
	const routeHome = path === '/new'
	const routeNew = path === '/newest'

	if (routeHome){
		path = '/news'
	}else if (routeNew){
		path = '/newest'
	}

	  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  	const stories = await response.json();
  	return stories;

}


