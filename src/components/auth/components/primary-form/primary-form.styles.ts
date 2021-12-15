import tw from 'twin.macro'

export const paperStyle = {
  ...tw`flex flex-col justify-center items-stretch p-6`,
  height: '600px',
  width: '520px',
}
export const headerBoxStyle = {
  ...tw`mb-6 text-gray-800`,
}
export const titleBoxStyle = {
  ...tw`text-2xl font-normal`,
}
export const subtitleBoxStyle = {
  ...tw`text-lg font-light`,
}
export const inputErrorBoxStyle = {
  ...tw`text-venetian-red text-xs font-light`,
}
export const submitButtonBoxStyle = {
  ...tw`flex justify-center items-center`,
}
export const submitButtonStyle = {
  ...tw`px-8 my-6 bg-mystic-maroon text-white hover:bg-mystic-maroon`,
}
