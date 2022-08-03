import logo from './logo.svg';
import './App.css';
import AppMain from './AppMain';
import {store} from './store';
import {Provider} from 'react-redux';



function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <React.Fragment>
      <CssBaseline />
      <AppBar>
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={login}>Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
          <AppMain/>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
      </Provider>
    </div>
  );
}

export default App;
