from selenium import webdriver
from selenium.webdriver.common.keys import Keys

def before_feature(context, feature):
    context.driver = webdriver.Firefox()


def after_feature(context, feature):
    context.driver.quit()
