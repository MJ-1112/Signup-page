import express from 'express';
import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Configure middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'ejs');

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://wtytrbperkkmuwyctyav.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eXRyYnBlcmtrbXV3eWN0eWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNTcwNTQsImV4cCI6MjA1NzkzMzA1NH0.bbZYBtmn6R9Graz_AVGt8JGda1KWNh5kZ65YPlnlJvI'
);

// Routes
app.get('/', (req, res) => {
  res.render("signup-page.ejs", {
    Title: "Sign up"
  });
});

app.post("/signup", async (req, res) => {
  try {
    // Get form data
    const username = req.body['username'];
    const password = req.body['password'];
    const email = req.body['email'];
    const pnumber = req.body['pnumber'];
    
    // Insert data into Supabase
    const { data, error } = await supabase
      .from('details')
      .insert({ 
        id: Math.floor(Math.random() * 1000000),
        username: username, 
        password: password, 
        email: email, 
        pnumber: pnumber 
      });
    
    if (error) {
      console.error('Error inserting data:', error);
      return res.status(500).send('Error creating account');
    }
    
    // Redirect to success page or show success message
    res.render("main.ejs");
    console.log("Data registered successfully");
    // Or redirect: res.redirect('/success');
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).send('Server error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
// passsword: MahikRocks12