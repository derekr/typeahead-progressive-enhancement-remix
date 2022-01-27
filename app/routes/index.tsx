export default function Index() {
  return (
    <>
      <form id="main">
        <label htmlFor="resources">Resources</label>
        <input id="resources" name="resources" />
        <br />
        <input
          name="typeahead"
          placeholder="search for resources"
          form="typeahead"
        />
        <button name="_action" value="suggestions" form="typeahead">
          Get suggestions
        </button>
        <br />
        <iframe name="suggestions" src="/typeahead" sandbox="allow-forms" />
      </form>
      <form id="typeahead" target="suggestions" action="/typeahead" />
    </>
  );
}
