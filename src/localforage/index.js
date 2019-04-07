import localForage from 'localforage';
import videoForage from './videoForage'

export default class createForage {
    constructor() {
        this.root = this
        this.videos = new videoForage(localForage)
    }
}