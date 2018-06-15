const defaultEnvironment = 'production'
const environment = {
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    apiToken: 's0m3ap1t0k3n',
  },
  test: {
    apiUrl: '',
    apiToken: 's0m3ap1t0k3n',
  }
}

export const environmentVars = environment[defaultEnvironment]
