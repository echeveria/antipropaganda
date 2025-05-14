const GoogleFormButton = ({ formUrl }) => {
  return (
    <a href={formUrl} target="_blank" rel="noopener noreferrer">
      <button className="bg-primary-500 hover:bg-primary-700 focus:ring-primary-600 dark:hover:bg-primary-400 w-auto rounded-md px-8 py-2 font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none sm:py-0 dark:ring-offset-black">
        Попълни формуляра за поръчка
      </button>
    </a>
  )
}
export default GoogleFormButton
