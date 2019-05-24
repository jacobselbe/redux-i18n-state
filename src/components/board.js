import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../actions';

export class Board extends React.Component {
    switchLanguage() {
        this.props.language === 'English' ?
            this.props.dispatch(setLanguage('German')) :
            this.props.dispatch(setLanguage('English'));
    };

    render() {
        return (
            <div>
                <h2>Current Language: {this.props.language}</h2>
                <button type='button' onClick={() => this.switchLanguage()}>Switch Language</button>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    language: state.language
});

export default connect(mapStateToProps)(Board);