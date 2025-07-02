import pytest
from pages.herokuapp_frames_page import HerokuappFramesPage


def test_nested_frames(browser_context):
    page = browser_context.new_page()
    frames = HerokuappFramesPage(page)

    frames.go_to_main()
    frames.go_to_nested_frames()

    assert frames.get_middle_frame_text() == "MIDDLE"
    assert frames.get_left_frame_text() == "LEFT"

    frames.go_back()
    assert frames.is_nested_frame_link_displayed()
