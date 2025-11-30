type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({legend, type="text", ...rest}:Props){
  return(
    <fieldset className="flex flex-col max-h-20">
      {
        legend &&
        <legend className="uppercase mb-3 text-xxs ">
          {legend}
        </legend>
      }

      <input        
      {...rest}
      className="w-full h-6 text-gray-100 outline-none pb-2.5 border-b-2 border-gray-500 focus:border-gray-700" 
      />
    </fieldset>
  )
}
