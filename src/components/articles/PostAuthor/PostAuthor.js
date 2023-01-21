import { getFullName } from '../../../utils'
import { Skeleton } from '../../common/Skeleton'
import dummyAvatar from '../../../styles/images/dummy-avatar.svg'

export const PostAuthor = ({ firstName, surname, usernameLink, isProfileLoading, isLoadingAvatarUrl, avatarUrl }) => (
  <div style={{
    display: 'flex',
    gap: '10px'
  }}>
    <div>
      <img src={isLoadingAvatarUrl ? dummyAvatar : avatarUrl} width="15" alt="" style={{ borderRadius: 3 }} />
    </div>
    {isProfileLoading ? (
      <Skeleton style={{ width: 100, height: 20, borderRadius: 5 }} />
    ) : (
      <span style={{
        fontSize: 15,
        fontWeight: 300,
        color: "#FFF"
      }}>{getFullName(firstName, surname) ?? usernameLink}</span>
    )}
  </div>
)
