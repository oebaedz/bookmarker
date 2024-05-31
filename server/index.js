const express = require('express')
const supabase = require('@supabase/supabase-js')
const cors = require('cors')

const app = express()
const PORT = 1999 || process.env.PORT
app.use(express.json())
app.use(cors())

const SUPA_URL = 'https://mjehoozrgrrlagkypxiv.supabase.co'
const SUPA_SERVICE_ROLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZWhvb3pyZ3JybGFna3lweGl2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjYzMTAwOSwiZXhwIjoyMDMyMjA3MDA5fQ.WjRs9yixZ3UlXJ98uqsutaNsK3edbEqniq6Sgf7eavs'

const db = supabase.createClient(SUPA_URL, SUPA_SERVICE_ROLE)

app.get('/', async (req, res) => {
    const getData = await db.from('bookmark').select()
    res.send(getData)
})

app.post('/', async (req, res) => {
    const {
        kitab,
        time,
        location,
        almaqru,
        almaqru_page,
        almaqru_srh_page,
        alnext,
        alnext_page,
        alnext_srh_page,
    } = req.body
    const createPost = await db.from('bookmark').insert({
        kitab,
        time,
        location,
        almaqru,
        almaqru_page,
        almaqru_srh_page,
        alnext,
        alnext_page,
        alnext_srh_page,
    })
    console.log(createPost)

    res.json(createPost)
})

app.listen('1999', () => {
    console.log('Server running on port', PORT)
})