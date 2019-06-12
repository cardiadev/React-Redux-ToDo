import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <React.Fragment>
      <Typography variant="h3" align="center" gutterBottom>
        ToDo App
      </Typography>

      <Grid container justify="center">
        <Grid item>
          <TodoForm />
          {/* <TodoForm
            value={this.state.value}
            updateValue={this.updateValue}
            saveTodo={this.saveTodo}
          /> */}
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item md={8} sm={10} xs={10}>
          {/* <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            toggleCompleted={this.toggleCompleted}
          /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
