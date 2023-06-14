export const formatNameMixin = {
    methods: {
      formatName(name) {
        switch(true) {
            case name === 'Антон':
                return 'Антона';
            case name === 'Галина':
                return 'Галины';
            case name === 'Николай':
                return 'Николая';
            default:
                return ''
        }
      }
    }
  };