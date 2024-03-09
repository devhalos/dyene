import AppRouter from './AppRouter';
import AppTheme from './AppTheme';
import AppQuery from './AppQuery';

import './common/services/lang';

export default function App() {
  return (
    <AppQuery>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AppQuery>
  );
}
