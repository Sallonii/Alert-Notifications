import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg">
    <h1>Alert Notifications</h1>
    <Notification>
      <div>
        <div className="icon-heading-container">
          <AiFillCheckCircle className="success-icon" />
          <h1 className="success-heading">Success</h1>
        </div>
        <p className="success-description">
          You can access all the files in the folder
        </p>
      </div>
      <GrFormClose />
    </Notification>
    <Notification>
      <div>
        <div className="icon-heading-container">
          <RiErrorWarningFill className="error-icon" />
          <h1 className="error-heading">Error</h1>
        </div>
        <p className="success-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
      <GrFormClose />
    </Notification>
    <Notification>
      <div>
        <div className="icon-heading-container">
          <MdWarning className="warning-icon" />
          <h1 className="warning-heading">Warning</h1>
        </div>
        <p className="success-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
      <GrFormClose />
    </Notification>
    <Notification>
      <div>
        <div className="icon-heading-container">
          <MdInfo className="info-icon" />
          <h1 className="info-heading">Info</h1>
        </div>
        <p className="success-description">
          Anyone on the internet can view these files
        </p>
      </div>
      <GrFormClose />
    </Notification>
  </div>
)

export default AlertNotifications
