import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'native-base';

import {{pascalCase name}}Style from './{{pascalCase name}}Style';

class {{pascalCase name}} extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        const { containerStyle } = {{pascalCase name}}Style;

        return (
            <View style={containerStyle}>
                <Text>{{titleCase name}}</Text>
            </View>
        );
    }
}

{{pascalCase name}}.defaultProps = {};

{{pascalCase name}}.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        job: PropTypes.string,
      }).isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)({{pascalCase name}});
