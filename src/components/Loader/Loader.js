import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        background: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Audio
        height="250"
        width="250"
        radius="9"
        color="grey"
        ariaLabel="loading"
      />
    </div>
  );
};
