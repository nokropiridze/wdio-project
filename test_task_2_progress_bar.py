import pytest
from pages.demoqa_widgets_page import DemoqaWidgetsPage


def test_progress_bar_reset_button(browser_context):
    page = browser_context.new_page()
    widgets = DemoqaWidgetsPage(page)

    widgets.go_to_widgets()
    widgets.go_to_progress_bar()
    widgets.start_progress()

    assert widgets.is_reset_displayed(), "Reset button should be visible"

    page.reload()

    assert not widgets.is_reset_displayed(
    ), "Reset button should not be visible after refresh"
