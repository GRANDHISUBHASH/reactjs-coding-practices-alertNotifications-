import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alertnotification-name">
    <h1>Alert Notifications</h1>
    <div className="notificationesbox">
      <Notification>
        <div className="notification">
          <h1>
            <AiFillCheckCircle color="green" />
            Success
          </h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>
      <Notification>
        <div className="notification">
          <h1>
            <RiErrorWarningFill color="red" />
            Error
          </h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>
      <Notification>
        <div className="notification">
          <h1>
            <MdWarning color="yellow" />
            Warning
          </h1>
          <p>Viewers of this file can see comments and suggestions </p>
        </div>
      </Notification>
      <Notification>
        <div className="notification">
          <h1>
            <MdInfo color="blue" />
            Info
          </h1>
          <p>anyone on the internet can view these files </p>
        </div>
      </Notification>
    </div>
  </div>
)
export default AlertNotifications
