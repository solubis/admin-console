import {Service, Inject, RestService} from 'angular-components';

@Service({
    name: 'DictionaryService'
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
