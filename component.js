import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';

import {{pascalCase name}}Style from './{{pascalCase name}}Style';

const {{pascalCase name}} = ({}) => {
    const {containerStyle} = {{pascalCase name}}Style;

    return (
        <View style={containerStyle}>
            <Text>{{titleCase name}}</Text>
        </View>
    );
};

{{pascalCase name}}.defaultProps = {}
{{pascalCase name}}.propTypes = {}

export default {{pascalCase name}};