from behave import *


@given('Website is up and running')
def step_impl(context):
    pass

@when('open boat-reservation')
def step_impl(context):
    context.driver.get("http://localhost:8080")
    pass

@then('"{text}" appear')
def step_impl(context,text):
    elem = context.driver.find_element_by_class_name("ember-view")
    assert elem.text == text
