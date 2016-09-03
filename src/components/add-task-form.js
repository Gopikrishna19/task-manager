import React, {PropTypes} from 'react';

class AddTaskForm extends React.Component {

    constructor() {

        super();

        this.state = {
            description: ''
        };

    }

    handleChange(event) {

        this.setState({description: event.target.value});

    }

    handleClick() {

        this.props.actions.addTask(this.state.description);

    }

    render() {

        return (
            <form>
                <input
                    type='text'
                    value={this.state.description}
                    onChange={event => this.handleChange(event)}
                />
                <button
                    onClick={() => this.handleClick()}
                    type='button'
                >
                    Add
                </button>
            </form>
        );

    }

}

AddTaskForm.propTypes = {
    actions: PropTypes.object.isRequired
};

export default AddTaskForm;
