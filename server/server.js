

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false })) // is this needed?\
app.use('api/class', require('./routes/classRoutes'))
app.use('api/teacher', require('./routes/teacherRoutes'))


app.use(errorHandler) // is this needed?

app.listen(port, () => console.log(`Server started on port${port}`))