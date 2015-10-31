import {Service, Inject, RestService} from 'angular-components';

@Service({
    name: 'dictionaryService'
})
@Inject('$rest')
class DictionaryService {
    constructor(private $rest: RestService) {
    }

    getAll() {
        return this.$rest.get('categories');
    }
}

export {DictionaryService};