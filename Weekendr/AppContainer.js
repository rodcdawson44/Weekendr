import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';
// you can also import from @react-navigation/native


const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;