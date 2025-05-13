const GoogleFormButton = ({ formUrl }) => {
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary-500 dark:hover:text-primary-400 fixed top-7 right-4 z-80 h-16 w-16 p-4 text-gray-900 dark:text-gray-100"
    >
      <button>Попълни формуляра за поръчка</button>
    </a>
  )
}
export default GoogleFormButton
