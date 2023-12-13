const Title = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 360 250"
      style={{
        strokeWidth: '20px',
        paintOrder: 'stroke',
        fontFamily: 'Agbalumo',
        fontSize: '120px',
        stroke: '#fff',
        letterSpacing: '-4.5px',
        fill: '#FE9EBF',
      }}
    >
      <text x="10" y="100">
        Secret
      </text>
      <br />
      <text x="30" y="194" style={{ fill: '#FD4801' }}>
        Santa
      </text>
    </svg>
  )
}

export default Title
