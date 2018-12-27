<?php

namespace de\pliete\domain;

class LakeTest extends \PHPUnit_Framework_TestCase {
  public function test_lake_should_have_a_name() {
    $stocksee = 'Stocksee';
    $lake = new Lake($stocksee);
    $this->assertEquals($stocksee,$lake->name());
  }
}
?>
