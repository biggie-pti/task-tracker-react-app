

const Button = ({color,text}) => {
  return (
   <button style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}
Button.default

export default Button