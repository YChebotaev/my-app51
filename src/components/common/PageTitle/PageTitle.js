import Legacy from './Legacy'
import { PageTitle as Modern } from './PageTitle/index'

export const PageTitle = ({ legacy, ...props }) => {
  if (legacy) {
    return <Legacy {...props} />
  } else {
    return <Modern {...props} />
  }
}
