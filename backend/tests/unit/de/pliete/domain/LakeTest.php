<?php

namespace de\pliete\domain;

class LakeTest extends \PHPUnit_Framework_TestCase {
  public function testLake() {
    $stocksee = 'Stocksee';
    $lake = new Lake($stocksee);
    $this->assertEquals($stocksee,$lake->name());
  }
}
?>
