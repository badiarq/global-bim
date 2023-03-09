export const PopupContainer = ({children, backgroundColor}) => {
  return (
    <div className="login-tab grow box-border flex flex-col flex-auto p-0 ease-in-out">
      <div className={`${backgroundColor} h-full flex-wrap flex flex-auto flex-col items-center justify-center p-5 pt-8 ml-auto mr-auto w-full`}>
        <div className="popup-container bg-white relative rounded-xl p-6 shadow-md z-1 col-span-4 lg:col-span-6 md:col-span-8 ">
          {children}
        </div>
      </div>
    </div>
  )
};
