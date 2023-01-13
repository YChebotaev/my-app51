export const TabsContent = ({ isActive, children }) => {
  return isActive ? (
    <div>
      {children}
    </div>
  ) : null
}
