/**
 *
 * Asynchronously loads the component for FeaturePage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
