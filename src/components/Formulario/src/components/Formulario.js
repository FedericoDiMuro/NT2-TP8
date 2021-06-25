
export default {
    name: 'src-components-formulario',
    components: {},
    props: [],
    data () {
      return {
        formData : this.getInicialData(),
        formState: {},
        nameLengthMin : 3,
        nameLengthMax: 15,
        ageMin: 18,
        ageMax: 120,
        users: []
      }
    },
    computed: {
  
    },
    mounted () {
  
    },
    methods: {
        getInicialData() {
            return {
                name: '',
                age: '',
                email: ''
            }
        },
        async sendPersona() {    
            let persona = {
              nombre: this.formData.name,
              edad: this.formData.age,
              mail: this.formData.email
            }

            try {
              this.$store.dispatch('addUser', persona)
              this.formData = this.getInicialData()
              this.formState._reset()
            }
            catch(error) {
              console.log(error)
            }
          }
    }
} 