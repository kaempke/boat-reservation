<?php
namespace de\pliete\domain;

class Lake {
  private $name;

  function __construct($lakename){
    $this->name = $lakename;
  }

  function name() {
    return $this->name;
  }
}
?>
