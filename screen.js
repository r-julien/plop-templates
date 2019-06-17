import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'native-base';

import {{pascalCase name}}Style from './{{pascalCase name}}Style';

class {{pascalCase name}} extends Component {

    constructor(props) {
        super(props);
    }

    render (){
        const { containerStyle } = {{pascalCase name}}Style;

        return (
            <View>
                <Text>{{titleCase name}}</Text>
            </View>
        );
    }
}

{{pascalCase name}}.defaultProps = {};

{{pascalCase name}}.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default {{pascalCase name}};
