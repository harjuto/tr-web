export default resolveConfig();


const resolveConfig = () => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return {
        myValue: "My value in development"
      }
    case 'production':
      return {
        myValue: "My value in production"
      }
  }
}
