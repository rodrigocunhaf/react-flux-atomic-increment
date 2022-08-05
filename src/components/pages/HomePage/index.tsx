import React from 'react';
import { DefaultPage } from '../../templates/DefaultPage';
// eslint-disable-next-line import/extensions
import content from './content/index.json';

const HomePage = () => <DefaultPage content={content} />;

export { HomePage };
