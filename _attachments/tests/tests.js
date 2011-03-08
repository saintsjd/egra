$(document).ready(function() {
  module("Basic Unit Test");
  test("Sample test", function() {
    expect(1);
    return equals(4 / 2, 2);
  });
  module("EGRA");
  QUnit.testStart = function(name) {
    console.log(name);
    return localStorage.clear();
  };
  test("JQueryMobilePage", function() {
    var expected_result, test_object;
    expect(1);
    test_object = new JQueryMobilePage();
    test_object.page_id = "page_id";
    test_object.footer = "footer_text";
    test_object.header = "header";
    test_object.content = "content";
    expected_result = "<div data-role='page' id='page_id'>  <div data-role='header'>    header  </div><!-- /header -->  <div data-role='content'>	    content  </div><!-- /content -->  <div data-role='footer'>    footer_text  </div><!-- /header --></div><!-- /page -->";
    return equals(test_object.render(), expected_result);
  });
  test("JQueryCheckbox", function() {
    var expected_result, test_object;
    expect(1);
    test_object = new JQueryCheckbox();
    test_object.unique_name = "unique_name";
    test_object.content = "content";
    expected_result = "<input type='checkbox' name='unique_name' id='unique_name' class='custom' /><label for='unique_name'>content</label>";
    return equals(test_object.render(), expected_result);
  });
  test("JQueryCheckboxGroup", function() {
    var expected_result, test_object, test_object1;
    expect(1);
    test_object = new JQueryCheckboxGroup();
    test_object.checkboxes = [];
    test_object1 = new JQueryCheckbox();
    test_object1.unique_name = "unique_name";
    test_object1.content = "content";
    test_object.checkboxes.push(test_object1);
    expected_result = "<div data-role='content'>	  <form>    <fieldset data-role='controlgroup' data-type='horizontal' data-role='fieldcontain'><input type='checkbox' name='unique_name' id='unique_name' class='custom' /><label for='unique_name'>content</label></fieldset>  </form></div>    ";
    return equals(test_object.render(), expected_result);
  });
  test("JQueryLogin", function() {
    var expected_result, test_object;
    expect(1);
    test_object = new JQueryLogin();
    expected_result = "<form>  <div data-role='fieldcontain'>    <label for='username'>Username:</label>    <input type='text' name='username' id='username' value='Enumia' />    <label for='password'>Password (not needed for demo):</label>    <input type='password' name='password' id='password' value='' />  </div></form>";
    return equals(test_object.render(), expected_result);
  });
  test("Timer", function() {
    var expected_result, test_object;
    expect(1);
    test_object = new Timer();
    expected_result = "<div>  <span id='timer'>60</span>  <a href='#' data-role='button'>start</a>  <a href='#' data-role='button'>stop</a>  <a href='#' data-role='button'>reset</a></div>";
    return equals(test_object.render(), expected_result);
  });
  test("LocalStorage Serialization", function() {
    var instructions, letters, login, test;
    expect(3);
    test = new Test();
    test.name = "EGRA Prototype";
    login = new JQueryMobilePage();
    instructions = new InstructionsPage();
    letters = new LettersPage();
    login.page_id = "Login";
    login.header = "<h1>EGRA</h1>";
    login.content = (new JQueryLogin()).render();
    instructions.page_id = "Instructions";
    instructions.header = "<h1>EGRA</h1>";
    instructions.url = "https://spreadsheets.google.com/pub?key=0Ago31JQPZxZrdGJSZTY2MHU4VlJ3RnNtdnNDVjRjLVE&hl=en&output=html";
    instructions.updateFromGoogle();
    letters.page_id = "Letters";
    letters.header = "<h1>EGRA</h1>";
    letters.url = "https://spreadsheets.google.com/pub?key=0Ago31JQPZxZrdC1MeGVqd3FZbXM2RnNFREtoVVZFbmc&hl=en&output=html";
    letters.updateFromGoogle();
    test.setPages([login, instructions, letters]);
    stop();
    return test.onReady(function() {
      var anotherTest, index, result;
      index = letters.index();
      letters.saveToLocalStorage();
      result = JQueryMobilePage.loadFromLocalStorage(index);
      equals(result.render(), letters.render());
      equals(result.content, letters.content);
      anotherTest = new Test();
      anotherTest.name = "EGRA Prototype";
      test.saveToLocalStorage();
      anotherTest.loadFromLocalStorage();
      anotherTest.onReady(function() {});
      return anotherTest.render(function(anotherTestResult) {
        return test.render(function(testResult) {
          equals(anotherTestResult, testResult);
          return start();
        });
      });
    });
  });
  return test("CouchDB Serialization", function() {
    var instructions, letters, login, test;
    expect(3);
    test = new Test();
    test.name = "TEST EGRA Prototype";
    login = new JQueryMobilePage();
    instructions = new InstructionsPage();
    letters = new LettersPage();
    login.page_id = "Login";
    login.header = "<h1>EGRA</h1>";
    login.content = (new JQueryLogin()).render();
    instructions.page_id = "Instructions";
    instructions.header = "<h1>EGRA</h1>";
    instructions.url = "https://spreadsheets.google.com/pub?key=0Ago31JQPZxZrdGJSZTY2MHU4VlJ3RnNtdnNDVjRjLVE&hl=en&output=html";
    instructions.updateFromGoogle();
    letters.page_id = "Letters";
    letters.header = "<h1>EGRA</h1>";
    letters.url = "https://spreadsheets.google.com/pub?key=0Ago31JQPZxZrdC1MeGVqd3FZbXM2RnNFREtoVVZFbmc&hl=en&output=html";
    letters.updateFromGoogle();
    test.setPages([login, instructions, letters]);
    stop();
    return test.onReady(function() {
      var anotherTest, index;
      index = letters.index();
      letters.saveToCouchDB();
      JQueryMobilePage.loadFromCouchDB(index, function(result) {
        console.log("assa");
        equals(result.render(), letters.render());
        return equals(result.content, letters.content);
      });
      anotherTest = new Test();
      anotherTest.name = "TEST EGRA Prototype";
      test.saveToCouchDB();
      anotherTest.loadFromCouchDB();
      anotherTest.onReady(function() {});
      return anotherTest.render(function(anotherTestResult) {
        return test.render(function(testResult) {
          equals(anotherTestResult, testResult);
          return start();
        });
      });
    });
  });
});