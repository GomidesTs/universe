import {
    Router
} from './router.js';

const router = new Router()

router.add('/', 'src/pages/Home/index.html')
router.add('/universe', 'src/pages/Universe/index.html')
router.add('/exploration', 'src/pages/Exploration/index.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
