const GoogleFormButton = ({ formUrl }) => {
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0"
    >
      <button className="w-auto rounded-md bg-primary-500 px-8 py-2 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0">
        Попълни формуляра за поръчка
      </button>
    </a>
  )
}
export default GoogleFormButton
